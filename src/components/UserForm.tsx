import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  email,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <>
        <label>First Name</label>
        <input
          style={{
            width: "100 %",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
          autoFocus
          required
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </>
      <label>Last Name</label>
      <input
        style={{
          width: "100 %",
          padding: "12px 20px",
          margin: "8px 0",
          display: "inline-block",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box",
        }}
        placeholder="Last Name"
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label>Email</label>
      <input
        style={{
          width: "100 %",
          padding: "12px 20px",
          margin: "8px 0",
          display: "inline-block",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box",
        }}
        placeholder="Email"
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  );
}
