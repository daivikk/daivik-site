import Image from 'next/image';
import pic from '../pic.png';

export default function ProfileImage() {
  return (
    <div className="fixed bottom-10 left-10 w-[220px] h-[290px]">
      <Image
        src={pic}
        alt="Profile"
        width={220}
        height={290}
        className="object-cover rounded"
      />
    </div>
  );
}

