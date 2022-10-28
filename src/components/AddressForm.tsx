import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Pickup method</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sable Square, Cape Town",
    Address: "Corner Bosmansdam and, Ratanga Rd, Milnerton, Cape Town, 7441",
    Hours: "Mon - Sun, 10am - 10pm",
    Phone: "0835683892",
    coordinates: {
      latitude: -33.88179165102888,
      longitude: 18.50810170961664,
    },
    PickUpFee: 0,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Shell Century, Cape Town",
    Address: "Century Blvd, Milnerton, Cape Town, 7441",
    Hours: "Mon - Sun, 10am - 10pm",
    Phone: "0835683892",
    coordinates: {
      latitude: -33.89223922469267,
      longitude: 18.515068441312213,
    },
    PickUpFee: 0,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "V&A Waterfront, Cape Town",
    Address: "19 Dock Rd, Cape Town, 8001",
    Hours: "Sat - Sun, 10am - 12am",
    Phone: "0835683892",
    coordinates: {
      latitude: -33.906307138309955,
      longitude: 18.419241899040998,
    },
    PickUpFee: 10,
  },
];
