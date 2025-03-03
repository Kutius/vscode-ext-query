import ky from 'ky'

interface ExtensionQueryCriteria {
  filterType: number
  value: string
}

interface ExtensionQueryFilter {
  criteria: ExtensionQueryCriteria[]
  direction: number
  pageSize: number
  pageNumber: number
  sortBy: number
  sortOrder: number
  pagingToken: string | null
}

interface ExtensionQueryRequest {
  filters: ExtensionQueryFilter[]
  assetTypes: string[]
}

export default defineEventHandler(async (event): Promise<any> => {
  const query = getQuery(event)
  const keyword = query.keyword as string || ''
  const pageSize = query.pageSize as number || 52
  const pageNumber = query.pageNumber as number || 1

  if (!keyword) {
    return {
      success: false,
      message: 'Keyword is required',
      data: null,
    }
  }

  try {
    const requestBody: ExtensionQueryRequest = {
      filters: [
        {
          criteria: [
            {
              filterType: 8,
              value: 'Microsoft.VisualStudio.Code',
            },
            {
              filterType: 10,
              value: keyword,
            },
            {
              filterType: 12,
              value: '37888',
            },
          ],
          direction: 2,
          pageSize,
          pageNumber,
          sortBy: 0,
          sortOrder: 0,
          pagingToken: null,
        },
      ],
      assetTypes: [
        'Microsoft.VisualStudio.Services.Icons.Default',
        'Microsoft.VisualStudio.Services.Icons.Branding',
        'Microsoft.VisualStudio.Services.Icons.Small',
      ],
    }

    const response = await ky.post<any>('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
      json: requestBody,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json;api-version=7.2-preview.1;excludeUrls=true',
      },
    }).json()

    return {
      success: true,
      data: response?.results || [],
    }
  }
  catch (error) {
    console.error('查询扩展时出错:', error)
    return {
      success: false,
      message: 'Query extension failed!',
      data: null,
    }
  }
})
