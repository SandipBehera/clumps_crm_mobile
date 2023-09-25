import React from "react";
import { Text, View } from "react-native";
import FooterComponent from "../../components/BottomBar";
import { List } from "react-native-paper";

export const LeadsComponent = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <List.AccordionGroup>
          <View>
            <List.Accordion title="New" id="1">
              <List.Item title="Item 3" />
            </List.Accordion>
            <List.Accordion title="Inprocess" id="2">
              <List.Item title="Item 3" />
            </List.Accordion>
            <List.Accordion title="Followup" id="3">
              <List.Item title="Item 3" />
            </List.Accordion>
            <List.Accordion title="Sitvist Initate" id="4">
              <List.Item title="Item 3" />
            </List.Accordion>
            <List.Accordion title="Recall" id="5">
              <List.Item title="Item 3" />
            </List.Accordion>
          </View>
        </List.AccordionGroup>
      </View>
      <View>
        <FooterComponent />
      </View>
    </>
  );
};
