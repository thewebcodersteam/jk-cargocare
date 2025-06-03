"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Truck, Package, MessageSquare } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Inquiry",
    description: "Client submits transportation requirements",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Quotation",
    description: "We provide competitive pricing and timeline",
    icon: FileText,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Dispatch",
    description: "Cargo pickup and transportation begins",
    icon: Truck,
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Delivery",
    description: "Safe and timely delivery to destination",
    icon: Package,
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "Feedback",
    description: "Client satisfaction and service review",
    icon: MessageSquare,
    color: "bg-pink-500",
  },
]

export function ProcessDiagram() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <article className="max-w-6xl mx-auto">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? "scale-110" : "hover:scale-105"
                }`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-gray-700">{step.id}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-300 mx-4">
                  <div
                    className="h-full bg-blue-500 transition-all duration-500"
                    style={{ width: activeStep > step.id ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{steps[activeStep - 1].title}</h3>
            <p className="text-gray-600 text-lg">{steps[activeStep - 1].description}</p>
          </CardContent>
        </Card>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {steps.map((step) => (
          <Card key={step.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </article>
  )
}
