'use client';

import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Image,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { steps } from "./Steps";

export default function History() {
    const [activeStep, setActiveStep] = useState(steps.length - 1);

    return (
        <Box
            maxHeight="calc(100vh - 200px)" // Adjust max height to fit within the viewport
            overflowY="auto" // Make the stepper scrollable
            overflowX="hidden" // Prevent x-axis scroll
            p={4} // Add padding for better spacing
            bg="white"
            borderRadius="md"
            boxShadow="md"
            w={"100%"}
        >
            <Stepper index={activeStep} orientation="vertical" gap="4" >
                {steps.map((step, index) => (
                    <Step key={index} >
                        <StepIndicator
                        >
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={
                                    <Box
                                        borderWidth="2px"
                                        borderRadius="50%"
                                        width="48px"
                                        height="48px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="lg"
                                    >
                                        {step.year}
                                    </Box>
                                }
                            />
                        </StepIndicator>

                        <Box flexShrink="0" maxWidth="100%">
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>
                                <Text
                                    whiteSpace="normal"
                                    wordBreak="break-word"
                                    maxWidth="100%"
                                >

                                    {step.description}
                                </Text>
                            </StepDescription>
                            <Image
                                src={step.image}
                                alt={`${step.title} image`}
                                mt={4}
                                borderRadius={5}
                                maxWidth="100%"
                                width={'220px'}
                            />
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
