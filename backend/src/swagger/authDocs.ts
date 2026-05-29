export const authDocs = {
  paths: {
    "/api/auth/register": {
      post: {
        tags: ["Auth"],
        description: "Register a user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateUserInput" },
            },
          },
        },
        responses: { 200: { description: "Registered successfully" } },
      },
    },
    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        description: "Login a user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateUserInputLogin" },
            },
          },
        },
        responses: { 200: { description: "Logged in successfully" } },
      },
    },
    "/api/auth/verify-otp": {
      post: {
        tags: ["Auth"],
        description: "Verify OTP of a user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateVerifyOtp" },
            },
          },
        },
        responses: { 200: { description: "Verified successfully" } },
      },
    },
  },
}