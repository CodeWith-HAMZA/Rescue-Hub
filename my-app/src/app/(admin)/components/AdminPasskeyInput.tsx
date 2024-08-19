"use client";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ADMIN_PASSKEY } from "@/utils/constants";
import { decryptData, encryptData } from "@/utils/helpers/crypto";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface AdminPasskey {
  ADMIN_PASSKEY: string | null;
}
export default function AdminPasskeyInput() {
  const [PassKey, setPassKey] = useState("");
  const hasCheckedAdmin = useRef(false); // Track if the effect has already run

  const [open, setOpen] = useState(false);

  const handlePasskeySubmission = () => {
    if (PassKey.length !== 6) {
      return toast.error("Passkey must be 6 digits");
    }
    if (ADMIN_PASSKEY !== PassKey) {
      return toast.error("Please enter a Valid Passkey");
    }

    const encryptedPasskey = encryptData<AdminPasskey>({ ADMIN_PASSKEY });
    localStorage.setItem("admin", encryptedPasskey);

    setPassKey("");
    setOpen(false);

    toast.success("Passkey Verified");
    console.log(PassKey);
  };
  useEffect(() => {
    // Ensure that the effect only runs once
    if (hasCheckedAdmin.current) return;

    hasCheckedAdmin.current = true;

    // check if admin is already logged in
    const admin = localStorage.getItem("admin");
    if (admin) {
      const adminDecryptedPasskey = decryptData<AdminPasskey>(admin);
      if (adminDecryptedPasskey.ADMIN_PASSKEY === ADMIN_PASSKEY) {
        setOpen(false);
      } else {
        toast.error(" Credentials are Manipulated");
        setOpen(true);
      }
    } else {
      toast.error("Session Expired, Verify yourself");
      setOpen(true);
    }
  }, []);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        {/* <Button variant="outline">Show Dialog</Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle>Verify Your Identity (As Admin)</AlertDialogTitle>
          <AlertDialogDescription>
            Please enter the 6-digit Passkey to Enter Admin Panel
          </AlertDialogDescription>
        </AlertDialogHeader>
        <section className="flex flex-col items-center justify-center">
          <InputOTP
            onChange={(value) => setPassKey(value)}
            className="flex gap-2"
            maxLength={6}
          >
            <InputOTPGroup className="flex gap-2">
              <InputOTPSlot index={0} className="border ring-black text-lg" />
              <InputOTPSlot index={1} className="border ring-black text-lg" />
              <InputOTPSlot index={2} className="border ring-black text-lg" />
              <InputOTPSlot index={3} className="border ring-black text-lg" />
              <InputOTPSlot index={4} className="border ring-black text-lg" />
              <InputOTPSlot index={5} className="border ring-black text-lg" />
            </InputOTPGroup>
          </InputOTP>
          {/* <span className="text-red-500">{err}</span> */}
        </section>
        <AlertDialogFooter className="justify-center">
          <Button
            // color="red"
            onClick={handlePasskeySubmission}
          >
            Verify And Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
