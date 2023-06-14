// import { Component } from 'react';

import { useEffect, useState } from 'react';

import { NotFound } from 'components/NotFound/NotFound';

import { PostsItem } from './components/PostsItem';
import { PostsLoader } from './components/PostsLoader';
import PostsSearch from './components/PostsSearch';

import { getPosts } from './services/api';

import { STATUS } from 'constants/status';

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);
  const [search, setSearch] = useState('');

  const fetchData = async (page = 1, search = '') => {
    setStatus(STATUS.loading);
    try {
      const data = await getPosts(page);
      setPosts(data);
      setStatus(STATUS.success);
    } catch (error) {
      setStatus(STATUS.error);
    }
  };

  useEffect(() => {
    fetchData({ search });
  }, [search]);

  const handleSearch = search => {
    setSearch(search);
  };
  return (
    <div>
      <PostsSearch onSearch={handleSearch} />

      {status === STATUS.error && <NotFound />}
      {(status === STATUS.loading || status === STATUS.idle) && <PostsLoader />}

      <div className="container-fluid g-0 pb-5 mb-5">
        <ul className="row">
          {posts?.data.map(post => (
            <li key={post.id} className="col-12 col-md-6 col-xxl-4 mb-4">
              <PostsItem post={post} />
            </li>
          ))}
        </ul>
      </div>

      {posts?.total_pages && (
        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(posts.total_pages)].map((_, index) => {
              const page = index + 1;

              return (
                <button
                  className="btn btn-primary"
                  type="button"
                  key={index}
                  disabled={page === posts.page}
                  onClick={() => {
                    if (page !== posts.page) {
                      fetchData({ page, search });
                    }
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Posts;

// export class Posts extends Component {
//   state = {
//     posts: null,
//     status: STATUS.idle,
//     search: '',
//   };
//   componentDidMount() {
//     this.fetchData({});
//   }
//   componentWillUnmount() {}
//   componentDidUpdate(_, prevState) {
//     const { search } = this.state;
//     if (prevState.search !== search) {
//       this.fetchData({ search });
//     }
//   }

//   fetchData = async (page = 1, search = '') => {
//     this.setState({ status: STATUS.loading });
//     try {
//       const data = await getPosts(page);
//       this.setState({ posts: data, status: STATUS.success });
//     } catch (error) {
//       this.setState({ status: STATUS.error });
//     }
//   };

//   handleSearch = search => {
//     this.setState({ search });
//   };

//   render() {
//     const { posts, status, search } = this.state;
//     return (
//       <div>
//         <PostsSearch onSearch={this.handleSearch} />

//         {status === STATUS.error && <NotFound />}
//         {(status === STATUS.loading || status === STATUS.idle) && (
//           <PostsLoader />
//         )}

//         <div className="container-fluid g-0 pb-5 mb-5">
//           <ul className="row">
//             {posts?.data.map(post => (
//               <li key={post.id} className="col-12 col-md-6 col-xxl-4 mb-4">
//                 <PostsItem post={post} />
//               </li>
//             ))}
//           </ul>
//         </div>

//         {posts?.total_pages && (
//           <div className="pagination">
//             <div className="btn-group my-2 mx-auto btn-group-lg">
//               {[...Array(posts.total_pages)].map((_, index) => {
//                 const page = index + 1;

//                 return (
//                   <button
//                     className="btn btn-primary"
//                     type="button"
//                     key={index}
//                     disabled={page === posts.page}
//                     onClick={() => {
//                       if (page !== posts.page) {
//                         this.fetchData({ page, search });
//                       }
//                     }}
//                   >
//                     {page}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
