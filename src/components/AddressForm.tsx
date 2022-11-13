import { FormWrapper } from "./FormWrapper";
import "../styles/AddressForm.css";
import React from "react";

type AddressData = {
  pickupLocation: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  pickupLocation,
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  React.useEffect(() => {
    console.log("====================================");
    console.log(pickupLocation);
    console.log("====================================");
  }, []);
  return (
    <FormWrapper title="Address">
      <div style={{ flexDirection: "row" }}>
        <div style={{ flexDirection: "row" }}>
          <h2>Delivery Method</h2>
          <select
            value={pickupLocation}
            onChange={(e) => updateFields({ pickupLocation: e.target.value })}
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          >
            {DeliveryMethod.map((data) => (
              <option value={data.title} key={data.title}>
                {data.title}
              </option>
            ))}
          </select>
        </div>

        {pickupLocation == "Pick Up" ? (
          <div style={{ flexDirection: "row" }}>
            <h2>Pick Up Location</h2>
            <select
              style={{
                width: "100 %",
                padding: "12px 20px",
                margin: "8px 0",
                display: "inline-block",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            >
              {DATA.map((data) => (
                <option value={data.title} key={data.id}>
                  {data.title}
                </option>
              ))}
            </select>
            <div style={{ flexDirection: "row" }}>
              <label>Pick Up Fee: R{"0"}</label>
            </div>
          </div>
        ) : (
          <div style={{ flexDirection: "row" }}>
            <div style={{ flexDirection: "row" }}>
              <label>Street</label>
              <input
                style={{
                  width: "100%",
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
                value={street}
                onChange={(e) => updateFields({ street: e.target.value })}
              />
            </div>
            <div style={{ flexDirection: "row" }}>
              <label>City</label>
              <input
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
                required
                type="text"
                value={city}
                onChange={(e) => updateFields({ city: e.target.value })}
              />
            </div>

            <div style={{ flexDirection: "row" }}>
              <label>State</label>
              <input
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
                required
                type="text"
                value={state}
                onChange={(e) => updateFields({ state: e.target.value })}
              />
            </div>

            <div style={{ flexDirection: "row" }}>
              <label>Zip</label>
              <input
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
                required
                type="text"
                value={zip}
                onChange={(e) => updateFields({ zip: e.target.value })}
              />
            </div>
          </div>
        )}
      </div>
    </FormWrapper>
  );
}

const DeliveryMethod = [{ title: "Pick Up" }, { title: "Delivery" }];

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
