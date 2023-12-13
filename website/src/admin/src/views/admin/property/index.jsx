// Chakra imports

import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
    columnsDataListingProperty
} from "./variables/columnsData";
import config from '../../../config.json';
import ColumnsTable from "./components/ColumnsTable";
function fetchPropertiesData() {
    return fetch(config.API_URL+"properties/")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Properties data:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error fetching properties data:', error);
            throw error;
        });
}

export default function ListingProperty() {
    let [propertyData, setPropertyData] = useState([{

    }]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPropertiesData();
                setPropertyData(data.data);
                console.log(data)
            } catch (error) {
                console.error('Error in component:', error);
            }
        };

        fetchData();
    }, []);
    console.log(propertyData)
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 0, md: 0 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <ColumnsTable
          columnsData={columnsDataListingProperty}
          tableData={propertyData}
        />
      </SimpleGrid>
    </Box>
  );
}