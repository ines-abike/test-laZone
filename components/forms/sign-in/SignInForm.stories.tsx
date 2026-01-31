import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor, expect } from "storybook/test";
import SignInForm from "./SignInForm";

const meta: Meta<typeof SignInForm> = {
  title: "Forms/SignInForm",
  component: SignInForm,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByPlaceholderText("Votre mot de passe");

    await userEvent.type(emailInput, "test@example.com", { delay: 100 });
    await userEvent.type(passwordInput, "password123", { delay: 100 });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button", { name: /se connecter/i });

    await userEvent.click(submitButton);

    await waitFor(() => {
      const errorMessages = canvas.getAllByText("Champ obligatoire");
      expect(errorMessages).toHaveLength(2);
    });
  },
};

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByPlaceholderText("Votre mot de passe");
    const submitButton = canvas.getByRole("button", { name: /se connecter/i });

    await userEvent.type(emailInput, "invalid-email", { delay: 50 });
    await userEvent.type(passwordInput, "password123", { delay: 50 });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(canvas.getByText("Adresse e-mail invalide")).toBeInTheDocument();
    });
  },
};

export const ShortPassword: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByPlaceholderText("Votre mot de passe");
    const submitButton = canvas.getByRole("button", { name: /se connecter/i });

    await userEvent.type(emailInput, "test@example.com", { delay: 50 });
    await userEvent.type(passwordInput, "123", { delay: 50 });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        canvas.getByText("Doit contenir au moins 8 caractères")
      ).toBeInTheDocument();
    });
  },
};

export const ForgotPasswordLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const forgotPasswordLink = canvas.getByText("Mot de passe oublié ?");

    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink).toHaveAttribute(
      "href",
      "localhost:3000/reset-password"
    );
  },
};

export const LoadingState: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByPlaceholderText("Votre mot de passe");
    const submitButton = canvas.getByRole("button", { name: /se connecter/i });

    await userEvent.type(emailInput, "test@example.com", { delay: 50 });
    await userEvent.type(passwordInput, "password123", { delay: 50 });

    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  },
};

// Story - Scénario complet de connexion
export const CompleteLoginFlow: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByPlaceholderText("Votre mot de passe");
    const submitButton = canvas.getByRole("button", { name: /se connecter/i });

    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");

    await userEvent.type(emailInput, "johndoe@example.com", { delay: 50 });
    expect(emailInput).toHaveValue("johndoe@example.com");

    await userEvent.type(passwordInput, "securePassword123", { delay: 50 });
    expect(passwordInput).toHaveValue("securePassword123");

    expect(submitButton).not.toBeDisabled();

    await userEvent.click(submitButton);
  },
};

// Story - Test de plusieurs erreurs simultanées
export const MultipleValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByPlaceholderText("Votre mot de passe");
    const submitButton = canvas.getByRole("button", { name: /se connecter/i });

    await userEvent.type(emailInput, "invalid", { delay: 50 });
    await userEvent.type(passwordInput, "123", { delay: 50 });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(canvas.getByText("Adresse e-mail invalide")).toBeInTheDocument();
      expect(
        canvas.getByText("Doit contenir au moins 8 caractères")
      ).toBeInTheDocument();
    });
  },
};

export const CorrectingErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const submitButton = canvas.getByRole("button", { name: /se connecter/i });

    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(canvas.getByText("Champ obligatoire")).toBeInTheDocument();
    });

    await userEvent.type(emailInput, "test@example.com", { delay: 50 });

    await waitFor(() => {
      expect(emailInput).toHaveValue("test@example.com");
    });
  },
};

export const FocusStates: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByPlaceholderText("Votre mot de passe");

    await userEvent.click(emailInput);
    expect(emailInput).toHaveFocus();

    await userEvent.tab();
    expect(passwordInput).toHaveFocus();

    await userEvent.tab();
    const forgotPasswordLink = canvas.getByText("Mot de passe oublié ?");
    expect(forgotPasswordLink).toHaveFocus();

    await userEvent.tab();
    const submitButton = canvas.getByRole("button", { name: /se connecter/i });
    expect(submitButton).toHaveFocus();
  },
};
