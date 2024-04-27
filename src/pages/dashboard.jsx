import React, { useEffect, useState } from "react";
import { Typography, Grid,CircularProgress,Box } from "@mui/material";
import SmallCards from "../components/SmallCards";
import { Activity, BookOpen, CheckCircle, List, PieChart } from "react-feather";
import { url } from "../utils/api";

const Dashboard = () => {
  const [apiData,setData] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/dashboard/dashboard-statics`, {
          headers: { Authorization: `Token ${localStorage.getItem("@token")}` },
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Typography fontWeight={700} variant="h6">
        Dashboard
      </Typography>
      <Typography variant="body2">A quick data overview</Typography>
    {isLoading ? <Box display='flex' justifyContent='center' alignItems='center' ><CircularProgress /></Box>  :<Grid container gap={5} my={2}>
        {[
          {
            icon: <Activity />,
            key: "total_dues",
            title: "Total Dues",
            color: "#FFA0A0",
          },
          {
            icon: <List />,
            key: "total_orders",
            title: "Total Orders",
            color: "#FFDE98",
          },
          {
            icon: <PieChart />,
            key: "total_accepted_enquired",
            title: "Total Accepted Enquired",
            color: "#9CFFBD",
          },
          {
            icon: <CheckCircle />,
            key: "total_accepted_orders",
            title: "Total Accepted Order",
            color: "#A3DAFF",
          },
          {
            icon: <BookOpen />,
            key: "open_ticket",
            title: "Open Ticket",
            color: "#EDFF7C",
          },
        ].map((item, index) => (
          <Grid item md={2}>
            <SmallCards
              icon={item.icon}
              value={apiData[item.key]}
              title={item.title}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>}
    </>
  );
};

export default Dashboard;
