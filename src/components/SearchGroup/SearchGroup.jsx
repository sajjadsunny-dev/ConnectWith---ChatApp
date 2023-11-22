import GroupList from './../GroupList/GroupList';
import SearchBox from '../SearchBox/SearchBox';

const SearchGroup = () => {
   return (
      <>
         <div className="w-full md:w-[32%] h-full md:h-[290px] lg:h-[305px] 2xl:h-[360px] flex flex-col justify-between">
            <SearchBox />
            <GroupList />
         </div>
      </>
   )
}

export default SearchGroup