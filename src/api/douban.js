import apiRequest from '@/utils/apiRequest'

/**
 * todo 接口不支持跨域，因此使用apicloud提供的写法，这里也可以使用自己的代理服务来做，这样就能web和app都能使用了，目前只有app能用
 * @param page
 * @param page_size
 */
export function top250({ page, page_size }) {
  return apiRequest({
    url: 'https://douban-api.zce.now.sh/v2/movie/top250',
    method: 'get',
    data: {
      start: (page - 1) * page_size,
      count: page_size
    }
  })
}

export function getMovieDetail({ id }) {
  return apiRequest({
    url: `https://douban-api.uieee.com/v2/movie/subject/${id}`,
    method: 'get',
    data: {}
  })
}
