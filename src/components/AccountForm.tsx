import { FormWrapper } from "./FormWrapper";

type AccountData = {
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({ password, updateFields }: AccountFormProps) {
  function sayHello() {
    alert("You clicked me!");
  }
  return (
    <FormWrapper title="Payment">
      <div>
        <button
          style={{
            height: 80,
            width: 200,
            borderRadius: 20,
            backgroundColor: "black",
            color: "white",
          }}
          onClick={sayHello}
        >
          Pay
        </button>
      </div>

      {/* <input
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
      /> */}
    </FormWrapper>
  );
}
