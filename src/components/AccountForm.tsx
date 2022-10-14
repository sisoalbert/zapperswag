import { FormWrapper } from "./FormWrapper";

type AccountData = {
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({ password, updateFields }: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Password</label>
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
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
