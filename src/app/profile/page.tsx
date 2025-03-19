import { Card, CardBody } from "@heroui/react";

export default async function Profile() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        {/* <User
          name={session.user?.name}
          description={session.user?.email}
          avatarProps={{
            showFallback: !session.user?.image,
            src: session.user?.image || "",
          }}
        /> */}
      </CardBody>
    </Card>
  );
}
