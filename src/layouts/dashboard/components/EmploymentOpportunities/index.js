import React from "react";
import { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import VuiBox from "components/VuiBox";

const EmploymentOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    fetch("/api/employment-opportunities")
      .then((response) => response.json())
      .then((data) => setOpportunities(data));
  }, []);

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="h5" fontWeight="bold" color="white">
          Employment Opportunities
        </VuiTypography>
        <Grid container spacing={2} mt={2}>
          {opportunities.map((opportunity) => (
            <Grid item xs={12} md={6} key={opportunity.JobID}>
              <Card>
                <VuiBox p={2}>
                  <VuiTypography variant="h6" color="white">
                    {opportunity.Title}
                  </VuiTypography>
                  <VuiTypography variant="body2" color="text">
                    {opportunity.Description}
                  </VuiTypography>
                  <VuiTypography variant="caption" color="text">
                    Location: {opportunity.Location}
                  </VuiTypography>
                </VuiBox>
              </Card>
            </Grid>
          ))}
        </Grid>
      </VuiBox>
    </Card>
  );
};

export default EmploymentOpportunities;