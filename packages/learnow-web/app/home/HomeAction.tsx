import { HomeActionType, IHomeAction, listActions } from './type';
import { useRouter } from 'next/navigation';
export const HomeAction = () => {
  const router = useRouter();

  const handleClick = (item: IHomeAction) => {
    if (item.type === HomeActionType.GET_STARTED) {
      router.push('/who');
      return;
    }

    router.push('/sign-in');
  };

  return (
    <div className="text-left pt-10">
      {listActions.map((item) => {
        const isSignIn = item.type === HomeActionType.SIGN_IN;

        return (
          <button
            className={`btn btn-xl px-11 rounded-md w-48 mr-6 ${isSignIn && 'bg-inherit hover:bg-neutral'}`}
            onClick={() => handleClick(item)}
          >
            <span className={`${isSignIn ? 'text-white' : 'text-primary' }`} >{item.title}</span>
          </button>
        );
      })}
    </div>
  );

};
