import React from "react";
import Page from "../../components/ui/page";
import WatchedVideosTable from "../../components/watchedVideosTable";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Card, CardDescription } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Key } from "lucide-react";

const badgesdata = [
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
  {
    icon: "https://physeo-prod.s3.amazonaws.com/1702586595092-physeo_048.png",
    description: "1st Login",
  },
];

const page = () => {
  return (
    <Page title="User Info" subTitle={true}>
      <div className="flex gap-3">
        <CardDescription>Image :</CardDescription>
        <Avatar className="h-24 w-24 rounded-sm">
          <AvatarImage src="https://physeo-prod.s3.amazonaws.com/1707278335116-IMG_6206%202.jpeg" />
          <AvatarFallback>User Image</AvatarFallback>
        </Avatar>
      </div>
      <div className="border-y mt-3 px-2 py-6">
        <div className="flex gap-5 sm:gap-1 flex-col sm:flex-row  justify-between">
          <div>
            <CardDescription>Name</CardDescription>
            <Label>Zach Thomson</Label>
          </div>
          <div>
            <CardDescription>Email</CardDescription>
            <Label>zach@prox13.com</Label>
          </div>
          <div>
            <CardDescription>College</CardDescription>
            <Label>St. George's University</Label>
          </div>
          <div>
            <CardDescription>Phone</CardDescription>
            <Label>3104981400</Label>
          </div>
          <div>
            <CardDescription>Gender</CardDescription>
            <Label>Male</Label>
          </div>
          <div>
            <CardDescription>Is email varified</CardDescription>
            <Label>Not</Label>
          </div>
          <div>
            <CardDescription>Joining date</CardDescription>
            <Label>Sat Aug 26 2023</Label>
          </div>
          <div>
            <CardDescription>Address</CardDescription>
            <Label>ARK Villas, Villa 38</Label>
          </div>
        </div>
      </div>

      <div className="border-y mt-3 px-2 py-4">
        <Label>Interactions</Label>
        <div className="flex flex-col gap-5 sm:flex-row  justify-between">
          <div>
            <CardDescription>Total videos interacted with</CardDescription>
            <Label>332</Label>
          </div>
          <div>
            <CardDescription>Total videos watched</CardDescription>
            <Label>182</Label>
          </div>
          <div>
            <CardDescription>Total Quiz Attempted</CardDescription>
            <Label>32</Label>
          </div>
          <div>
            <CardDescription>Total Audio listened</CardDescription>
            <Label>2</Label>
          </div>
          <div>
            <CardDescription>Total flash cards downloaded</CardDescription>
            <Label>108</Label>
          </div>
        </div>
      </div>
      <div className="border-y mt-3 px-2 py-4">
        <Label>Badges</Label>
        <div className="flex flex-wrap gap-5 sm:flex-row justify-between">
          {badgesdata.map((items, index) => {
            return (
              <div key={index} className="">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={items.icon} />
                  <AvatarFallback>Badges</AvatarFallback>
                </Avatar>
                <Label>{items.description}</Label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3">
        <Label>Plans Subscribed</Label>
        <Card className="flex mt-1">
          <CardDescription className="w-[20%] px-4 py-4 border-r-[1px]">
            Plans
          </CardDescription>
          <CardDescription className="px-4 py-4">
            clinical Month-To-Month, preclinical Month-To-Month
          </CardDescription>
        </Card>
      </div>
      <div className="watchedVideoTable mt-3">
        <Label>Videos watched</Label>
        <div className="mt-1">
          <WatchedVideosTable />
        </div>
      </div>
    </Page>
  );
};

export default page;
