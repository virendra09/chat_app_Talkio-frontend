import { MessageCircleHeartIcon } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-yellow-300 flex items-center
             justify-center animate-pulse"
            >
              <MessageCircleHeartIcon className="w-9 h-9 text-green-600 " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">You're in, Let’s Talkio</h2>
        <p className="text-base-content/60 font-bold">
          No awkward silences here — pick a chat!
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
