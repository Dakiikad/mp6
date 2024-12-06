import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import type { Session } from "@auth/core/types";
import Logout from "../components/Logout";
import { Box } from '@mui/material';


const HomePage: React.FC = async () => {
    const session: Session | null = await auth(); // Use the correct type from the library

    if (!session?.user) redirect("/");

    const userName = session.user.name ?? "Guest"; // Handle potential null or undefined
    const userImage = session.user.image ?? "/default-avatar.png"; // Provide fallback for image
    const userEmail = session.user.email ?? "No email provided";
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: 'royalblue'
            }}>
            <h1>Profile</h1>
            <Image
                src={userImage}
                alt={userName}
                width={72}
                height={72}
                className="rounded-full"
            />
            <p>USERNAME: {userName}</p>
            <p>EMAIL: {userEmail}</p>
            <p>Signed in with: github</p>
            <Logout/>
        </Box>

    );

};

export default HomePage;