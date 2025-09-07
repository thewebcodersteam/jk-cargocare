import { google } from "googleapis";
import { Readable } from "stream";

export const config = { api: { bodyParser: false } };

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const role = formData.get("role");
    const resume = formData.get("resume");

    if (!name || !role || !resume) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const buffer = Buffer.from(await resume.arrayBuffer());
    const stream = Readable.from(buffer);

    // OAuth2 client
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

    const drive = google.drive({ version: "v3", auth: oAuth2Client });

    // 1️⃣ Reuse or create JK folder
    let jkFolderId;
    const jkFolderList = await drive.files.list({
      q: "mimeType='application/vnd.google-apps.folder' and name='JK' and trashed=false",
      fields: "files(id, name)",
    });
    if (jkFolderList.data.files.length > 0) {
      jkFolderId = jkFolderList.data.files[0].id;
    } else {
      const jkFolder = await drive.files.create({
        requestBody: { name: "JK", mimeType: "application/vnd.google-apps.folder" },
        fields: "id",
      });
      jkFolderId = jkFolder.data.id;
    }

    // 2️⃣ Reuse or create role subfolder inside JK
    const folderName = role.replace(/\s+/g, "_");
    let roleFolderId;
    const roleFolderList = await drive.files.list({
      q: `'${jkFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`,
      fields: "files(id, name)",
    });
    if (roleFolderList.data.files.length > 0) {
      roleFolderId = roleFolderList.data.files[0].id;
    } else {
      const folder = await drive.files.create({
        requestBody: { name: folderName, mimeType: "application/vnd.google-apps.folder", parents: [jkFolderId] },
        fields: "id",
      });
      roleFolderId = folder.data.id;
    }

    // 3️⃣ Unique file name: clientName_date_originalFileName
    const today = new Date().toISOString().split("T")[0];
    const sanitizedName = name.replace(/\s+/g, "_");
    const fileName = `${sanitizedName}_${today}_${resume.name}`;

    // 4️⃣ Upload file
    const uploaded = await drive.files.create({
      requestBody: { name: fileName, parents: [roleFolderId] },
      media: { mimeType: resume.type, body: stream },
      fields: "id",
    });

    const fileLink = `https://drive.google.com/file/d/${uploaded.data.id}/view`;

    return new Response(JSON.stringify({ link: fileLink }), { status: 200 });
  } catch (err) {
    console.error("Upload error:", err);
    return new Response(JSON.stringify({ error: err.message || "Upload failed" }), { status: 500 });
  }
}
