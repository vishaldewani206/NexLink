export const schemas = {
  components: {
    schemas: {
      CreateUserInput: {
        type: "object",
        required: ["email", "name", "password"],
        properties: {
          email: { type: "string", default: "t@g.com" },
          name: { type: "string", default: "test" },
          password: { type: "string", default: "12345678" },
        },
      },
      
      CreateUserInputLogin: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: { type: "string", default: "t@g.com" },
          password: { type: "string", default: "12345678" },
        },
      },
      CreateVerifyOtp: {
        type: "object",
        required: ["email", "otp"],
        properties: {
          email: { type: "string", default: "t@g.com" },
          otp: { type: "string", default: "12345" },
        },
      },

      CreateCheckUser: {
        type: "object",
        required: ["email", "name", ],
        properties: {
          email: { type: "string", default: "t@g.com" },
          name: { type: "string", default: "test" },
        },
      },
    },
  },
}