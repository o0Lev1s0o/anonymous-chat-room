import React from 'react';
import Link from 'next/link'
import Typist from 'react-typist-component';
// import { HistoryCard } from '@/components/HistoryCard';
import { theme } from '@/lib/const';

class Home extends React.Component {
  state = {
    roomIdText: '',
    cursor: "|"
  };
  constructor(props: any) {
    super(props);
  }
  handleRoomIdTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ roomIdText: event.target.value });
  };

// timer = setInterval(()=>{
//     this.setState({cursor: this.state.cursor === "|" ? "*" : "|"})
// }, 300);

  render() {
    return (
        <div className='Home flex justify-center items-center text-center mx-auto h-full w-full'>
            <div className='flex flex-col text-center justify-center'>
                <div className='text-xl md:text-5xl mb-2 hidden sm:block'>
                    A<Typist startDelay={1000}  typingDelay={110} loop={true}  cursor={<span className='cursor'>{this.state.cursor}</span>}   >nonymous Chat Room <Typist.Delay ms={1500} /><Typist.Backspace count={18} /></Typist>

                </div>
                <div className='text-xl md:text-5xl mb-2 block sm:hidden'>
                    Anonymous Chat Room
                </div>
                <div className="mx-auto mt-8 max-w-xl sm:flex sm:gap-4 h-12">
                <input
                    placeholder="Room Name"
                    value={this.state.roomIdText}
                    onChange={this.handleRoomIdTextChange}
                    className="w-48 rounded-lg border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus: ring-secondary-focus"
                    style={{ marginRight: 10 }}
                />
                <Link href={`/${this.state.roomIdText}`} > 
                    <button
                        className=" font-bold btn-primary rounded-lg h-full w-20 border-none text-white"
                    >
                        👉GO
                    </button>
                </Link>
                </div>
            </div>
            {/* <div>
                <HistoryCard/>
            </div> */}
        </div>
    );
  }
}

export default Home;
