import React from 'react'
import { IUrl } from './model/types'
import UrlItem from 'features/url/ui/url-item'
interface UrlListProps{
    urls:IUrl[]
}
const UrlList = ({urls}:UrlListProps) => {
  return (
    <div className="flex flex-col overflow-x-auto shadow align-middle w-full">
    <div className="table-fixed divide-y divide-gray-200 w-full text-left">
      <div className="w-full flex flex-col divide-y divide-gray-200">
          {urls.map((url) => (
              <UrlItem  key={url.id} url={url} />
          ))}
      </div>
    </div>
  </div>
  )
}

export default UrlList