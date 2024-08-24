'use client'

import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";

interface ImageModalProps {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    src
}) => {
    if (!src) {
        return null;
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="h-80 w-80">
            <Image 
                alt="Image"
                className="object-contain"
                fill
                src={src}/>
        </div>
    </Modal>
  )
}

export default ImageModal