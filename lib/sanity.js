import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'b416twxi',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skiBB7wqBC6vYCghceDv1JiGCykJKrL5M4qsqc56HaemOkyJ0mF3WaRYszCwXJWsrNgNeEl649RPLvkwmdAdlHI44tjFuBLotK0LtVybhmEbijx3tJXyr0coryNvPxaXWV222ecYpDs74u7Uu7gR8fccKUSk8BTghWS4k8C3RrYHpA5v7OsZ',
    useCdn: false,
})