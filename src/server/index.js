import { Server } from "miragejs"


new Server({
    routes() {
        this.get('/transactions', () => {
            return [
                {
                    id: 1, items: [
                        { name: 'productA', numberOfItems: 1, value: 20 },
                        { name: 'productB', numberOfItems: 1, value: 50 },
                    ], date: '11-04-2023'
                },
                {
                    id: 2, items: [
                        { name: 'productA', numberOfItems: 3, value: 60 },
                    ], date: '11-05-2023'
                },
                {
                    id: 3, items: [
                        { name: 'productA', numberOfItems: 4, value: 80 },
                        { name: 'productC', numberOfItems: 1, value: 100 },
                    ], date: '22-05-2023'
                },
                {
                    id: 4, items: [
                        { name: 'productA', numberOfItems: 4, value: 80 },
                        { name: 'productC', numberOfItems: 1, value: 100 },
                    ], date: '11-06-2023'
                },
                {
                    id: 5, items: [
                        { name: 'productD', numberOfItems: 4, value: 40 },
                        { name: 'productA', numberOfItems: 1, value: 20 },
                    ], date: '13-06-2023'
                }
            ]
        },
        { timing: 4000 }
        )
    },
})
