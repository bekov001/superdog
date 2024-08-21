export default function UserTab() {
  return (
    <div className="flex flex-col w-[100%] items-center h-[100%] mt-[50px]">
      <h1 className="text-[40px] font-['Open_Sans'] mb-[20px] text-center font-[600]">
        Invite friends and <br />
        get more coins
      </h1>
      <button
        className="bg-white text-black cursor-pointer 
      flex justify-center text-[25px] 
      font-[700] items-center w-[280px] h-[60px]
      font-['Open_Sans'] mt-[30px]
      "
      >
        Invite friends
      </button>
    </div>
  );
}
