"use client";

import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {

    const router = useRouter();

    return (
        <nav className="flex w-full p-4 text-x1 font-semibold border-b items-center justify-between">
        <div>Gallery</div>
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <div className="items-center flex flex-row gap-5">
                {/* <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
                    router.refresh();
                }}/> */}
                <SimpleUploadButton/>
                <UserButton/>
                </div>
            </SignedIn>
            </div>
        </nav>
    );
}