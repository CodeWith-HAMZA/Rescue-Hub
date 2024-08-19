import { Paperclip } from "lucide-react";
import React, { useState, ChangeEvent } from "react";

interface FilePreviewProps {
  onFilesChange?: (files: File[]) => void;
  filesForPreview?: string[];
  onlyPreview?: boolean;
}
interface VideoPreviewProps {
  fileUrl: string;
  index: number;
  fileType: string;
}
interface ImagePreviewProps {
  fileUrl: string;
  index: number;
}

interface PreviewGalleryProps {
  filesForPreview: Array<File | string>;
}
const ImagePreview: React.FC<ImagePreviewProps> = ({ fileUrl, index }) => (
  <div
    key={index}
    className="bg-gray-50 rounded-lg hover:opacity-90 transition-all cursor-pointer"
  >
    <img
      src={fileUrl}
      alt={`preview-${index}`}
      className="border border-gray-200 rounded-lg"
      style={{ width: "200px", height: "auto" }}
    />
    <a target="__blank" href={fileUrl}>View File</a>
  </div>
);

const PreviewGallery: React.FC<PreviewGalleryProps> = ({ filesForPreview }) => {
  return (
    <div className="w-full flex gap-2 flex-wrap justify-start">
      {filesForPreview.map((file, index) => {
        let fileUrl: string;
        let fileType: string;
 
        if (typeof file === "string") {
          fileUrl = file;
          fileType = file.endsWith(".mp4") ? "video/mp4" : "image/jpeg"; // Adjust as needed
        } else {
          fileUrl = URL.createObjectURL(file);
          fileType = file.type;
        }

        if (fileType.startsWith("image/")) {
          return <ImagePreview key={index} fileUrl={fileUrl} index={index} />;
        } else if (fileType.startsWith("video/")) {
          return (
            <VideoPreview
              key={index}
              fileUrl={fileUrl}
              index={index}
              fileType={fileType}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

const VideoPreview: React.FC<VideoPreviewProps> = ({
  fileUrl,
  index,
  fileType,
}) => (
  <div key={index}>
    <video controls width="200" className="rounded-lg">
      <source src={fileUrl} type={fileType} />
      Your browser does not support the video tag.
    </video>
  </div>
);

const FilePreview: React.FC<FilePreviewProps> = ({
  onFilesChange,
  onlyPreview,
  filesForPreview,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      onFilesChange(fileArray); // Pass selected files back to the parent component
    }
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold text-xl">Applicant's Attachments</h3>

      <div className="px-7 flex items-center justify-center w-full bg-neutral-100 rounded-xl py-4 mb-8 mt-4">
        {/* label for the input and hide the input  */}
        {selectedFiles.length === 0 && !onlyPreview ? (
          <label
            htmlFor="file-upload"
            className="flex gap-2 items-center font-semibold cursor-pointer hover:opacity-70 transition-all hover:underline"
          >
            <Paperclip size={16} />
            <span>Attach Some Files (As Proof)</span>
          </label>
        ) : null}

        <input
          className="hidden"
          type="file"
          accept="image/*,video/*"
          multiple
          id="file-upload"
          onChange={handleFileChange}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "20px 0",
          }}
        >
          {/* {selectedFiles.map((file, index) => {
          const fileUrl = URL.createObjectURL(file);
          if (file.type.startsWith("image/")) {
            return (
              <>
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg hover:opacity-90 transition-all cursor-pointer"
                >
                  <img
                    src={fileUrl}
                    alt={`preview-${index}`}
                    className="border border-gray-200 rounded-lg"
                    style={{ width: "200px", height: "auto" }}
                  />
                </div>
              </>
            );
          } else if (file.type.startsWith("video/")) {
            return (
              <div key={index}>
                <video controls width="200" className="rounded-lg">
                  <source src={fileUrl} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          } else {
            return null;
          }
        })} */}
          <PreviewGallery
            filesForPreview={
              (onlyPreview ? filesForPreview : selectedFiles) || []
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
