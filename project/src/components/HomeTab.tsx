export default function HomeTab() {
  let user_balance: number = 0.01;

  return (
    <div className="flex h-[100%] flex-col w-[100%] items-center">
      <h1 className="text-[30px] tracking-wide font-['Open_Sans'] mb-[20px] font-[500] mt-[40px]">
        Balance
      </h1>
      <p className="text-[40px] font-[600] tracking-[2.5px] mb-[50px]">
        {user_balance} $
      </p>
      <h1 className="text-[35px] font-[500] bg-white text-black w-[100%] text-center h-[60px] mb-[100px]">
        There will be game
      </h1>
    </div>
  );
}
