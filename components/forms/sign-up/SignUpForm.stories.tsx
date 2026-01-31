import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor, expect } from "storybook/test";
import SignUpForm from "./SignUpForm";

const meta: Meta<typeof SignUpForm> = {
  title: "Forms/SignUpForm",
  component: SignUpForm,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const lastnameInput = canvas.getByPlaceholderText("Doe");
    const firstnameInput = canvas.getByPlaceholderText("John");
    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByLabelText("Mot de passe");
    const confirmPasswordInput = canvas.getByLabelText(
      "Répéter le mot de passe"
    );

    await userEvent.type(lastnameInput, "Dupont", { delay: 100 });
    await userEvent.type(firstnameInput, "Jean", { delay: 100 });
    await userEvent.type(emailInput, "jean.dupont@example.com", { delay: 100 });
    await userEvent.type(passwordInput, "motdepasse123", { delay: 100 });
    await userEvent.type(confirmPasswordInput, "motdepasse123", { delay: 100 });

    expect(lastnameInput).toHaveValue("Dupont");
    expect(firstnameInput).toHaveValue("Jean");
    expect(emailInput).toHaveValue("jean.dupont@example.com");
    expect(passwordInput).toHaveValue("motdepasse123");
    expect(confirmPasswordInput).toHaveValue("motdepasse123");
  },
};

export const ValidationErrorsEmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.click(submitButton);

    await waitFor(() => {
      const errorMessages = canvas.getAllByText("Champ obligatoire");
      expect(errorMessages).toHaveLength(5);
    });
  },
};

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.type(emailInput, "email-invalide", { delay: 50 });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(canvas.getByText("Adresse e-mail invalide")).toBeInTheDocument();
    });
  },
};

export const ShortPassword: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const passwordInput = canvas.getByLabelText("Mot de passe");
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.type(passwordInput, "12345", { delay: 50 });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        canvas.getByText("Doit contenir au moins 8 caractères")
      ).toBeInTheDocument();
    });
  },
};

export const PasswordMismatch: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const lastnameInput = canvas.getByPlaceholderText("Doe");
    const firstnameInput = canvas.getByPlaceholderText("John");
    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByLabelText("Mot de passe");
    const confirmPasswordInput = canvas.getByLabelText(
      "Répéter le mot de passe"
    );
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.type(lastnameInput, "Dupont", { delay: 50 });
    await userEvent.type(firstnameInput, "Jean", { delay: 50 });
    await userEvent.type(emailInput, "jean@example.com", { delay: 50 });
    await userEvent.type(passwordInput, "motdepasse123", { delay: 50 });
    await userEvent.type(confirmPasswordInput, "autremotdepasse", {
      delay: 50,
    });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        canvas.getByText("Les mots de passe doivent correspondre")
      ).toBeInTheDocument();
    });
  },
};

export const FirstnameTooLong: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const firstnameInput = canvas.getByPlaceholderText("John");
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.type(firstnameInput, "JeanChristopheMaximilien", {
      delay: 50,
    });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        canvas.getByText("Doit contenir au maximum 15 caractères")
      ).toBeInTheDocument();
    });
  },
};

export const LastnameTooLong: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const lastnameInput = canvas.getByPlaceholderText("Doe");
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.type(lastnameInput, "DupontDeLaRochefoucauld", {
      delay: 50,
    });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        canvas.getByText("Doit contenir au maximum 20 caractères")
      ).toBeInTheDocument();
    });
  },
};

export const PasswordHelperText: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const helperText = canvas.getByText("(8 caractères minimum)");
    expect(helperText).toBeInTheDocument();
  },
};

export const CompleteRegistrationFlow: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const lastnameInput = canvas.getByPlaceholderText("Doe");
    const firstnameInput = canvas.getByPlaceholderText("John");
    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByLabelText("Mot de passe");
    const confirmPasswordInput = canvas.getByLabelText(
      "Répéter le mot de passe"
    );
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    expect(lastnameInput).toHaveValue("");
    expect(firstnameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
    expect(confirmPasswordInput).toHaveValue("");

    await userEvent.type(lastnameInput, "Bernard", { delay: 50 });
    expect(lastnameInput).toHaveValue("Bernard");

    await userEvent.type(firstnameInput, "Marie", { delay: 50 });
    expect(firstnameInput).toHaveValue("Marie");

    await userEvent.type(emailInput, "marie.bernard@example.com", {
      delay: 50,
    });
    expect(emailInput).toHaveValue("marie.bernard@example.com");

    await userEvent.type(passwordInput, "password2024", { delay: 50 });
    expect(passwordInput).toHaveValue("password2024");

    await userEvent.type(confirmPasswordInput, "password2024", { delay: 50 });
    expect(confirmPasswordInput).toHaveValue("password2024");

    expect(submitButton).not.toBeDisabled();

    await userEvent.click(submitButton);
  },
};

export const MultipleValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const lastnameInput = canvas.getByPlaceholderText("Doe");
    const firstnameInput = canvas.getByPlaceholderText("John");
    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByLabelText("Mot de passe");
    const confirmPasswordInput = canvas.getByLabelText(
      "Répéter le mot de passe"
    );
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.type(lastnameInput, "NomBeaucoupTropLongPourLeLimite", {
      delay: 50,
    });
    await userEvent.type(firstnameInput, "PrenomTropLongAussi", { delay: 50 });
    await userEvent.type(emailInput, "email-invalide", { delay: 50 });
    await userEvent.type(passwordInput, "123", { delay: 50 });
    await userEvent.type(confirmPasswordInput, "456", { delay: 50 });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        canvas.getByText("Doit contenir au maximum 20 caractères")
      ).toBeInTheDocument();
      expect(
        canvas.getByText("Doit contenir au maximum 15 caractères")
      ).toBeInTheDocument();
      expect(canvas.getByText("Adresse e-mail invalide")).toBeInTheDocument();
      expect(
        canvas.getByText("Doit contenir au moins 8 caractères")
      ).toBeInTheDocument();
      expect(
        canvas.getByText("Les mots de passe doivent correspondre")
      ).toBeInTheDocument();
    });
  },
};

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const lastnameInput = canvas.getByPlaceholderText("Doe");
    const firstnameInput = canvas.getByPlaceholderText("John");
    const emailInput = canvas.getByPlaceholderText("johndoe@mail.com");
    const passwordInput = canvas.getByLabelText("Mot de passe");
    const confirmPasswordInput = canvas.getByLabelText(
      "Répéter le mot de passe"
    );
    const submitButton = canvas.getByRole("button", { name: /s'enregistrer/i });

    await userEvent.click(lastnameInput);
    expect(lastnameInput).toHaveFocus();

    await userEvent.tab();
    expect(firstnameInput).toHaveFocus();

    await userEvent.tab();
    expect(emailInput).toHaveFocus();

    await userEvent.tab();
    expect(passwordInput).toHaveFocus();

    await userEvent.tab();
    expect(confirmPasswordInput).toHaveFocus();

    await userEvent.tab();
    expect(submitButton).toHaveFocus();
  },
};

// Story - Test de la limite de caractères
export const CharacterLimitsEdgeCases: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const lastnameInput = canvas.getByPlaceholderText("Doe");
    const firstnameInput = canvas.getByPlaceholderText("John");

    await userEvent.type(firstnameInput, "JeanChristophe", { delay: 50 });
    expect(firstnameInput).toHaveValue("JeanChristophe");

    await userEvent.type(lastnameInput, "DupontDeLaRochette", { delay: 50 });
    expect(lastnameInput).toHaveValue("DupontDeLaRochette");
  },
};
