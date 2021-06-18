import Expense from '../models/expense.model';

export const mockData: Expense[] = [
    {
        id: '73a00e74-b77e-5034-b80c-e499cd22011f',
        name: 'Car',
        type: 'Expense',
        category: 'Entertainment',
        description: 'Eaque vero modi qui id enim saepe rerum aut quae.',
        amount: 478.09,
        date: '2020-09-04T06:17:16.195Z',
        transferType: 'Bank',
        transactionMessage:
            'Vel laborum et necessitatibus repudiandae molestiae.',
        billUrl: 'http://theron.info',
        trackAsExpense: false
    },
    {
        id: 'a81c276d-d024-5993-8414-e0a66abd80fb',
        name: 'Computer',
        type: 'Income',
        category: 'Entertainment',
        description: 'Ea ex dolore qui provident qui velit omnis.',
        amount: 505.04,
        date: '2021-02-03T07:06:49.324Z',
        transferType: 'Bank',
        transactionMessage:
            'Impedit quasi quod natus exercitationem veritatis fuga.',
        billUrl: 'http://yoshiko.info',
        trackAsExpense: false
    },
    {
        id: '42be7f8b-0c16-51ed-b7e1-f055abd7f569',
        name: 'Table',
        type: 'Expense',
        category: 'Entertainment',
        description: 'Facilis quia sapiente amet ipsam commodi.',
        amount: 160.72,
        date: '2020-09-20T00:06:03.564Z',
        transferType: 'Bank',
        transactionMessage:
            'Sapiente dolorum consequuntur minima ipsum dolorem.',
        billUrl: 'https://tavares.org',
        trackAsExpense: false
    },
    {
        id: '7f081536-7d22-55db-8167-16287681dfd4',
        name: 'Soap',
        type: 'Expense',
        category: 'Entertainment',
        description: 'Voluptate voluptate voluptate voluptas sit.',
        amount: 11.97,
        date: '2021-02-01T05:14:15.152Z',
        transferType: 'Cash',
        transactionMessage:
            'Est porro et mollitia soluta debitis nulla eligendi dolorem.',
        billUrl: 'https://jason.net',
        trackAsExpense: true
    },
    {
        id: '07c192ec-3076-54b1-b365-b0bbd3ae354e',
        name: 'Tuna',
        type: 'Income',
        category: 'Food',
        description:
            'Minima sint quaerat aut quis voluptatem temporibus a minus.',
        amount: 837.31,
        date: '2020-09-09T17:04:23.943Z',
        transferType: 'Cash',
        transactionMessage: 'Non accusamus natus error est officiis quia ea.',
        billUrl: 'https://gaston.net',
        trackAsExpense: false
    },
    {
        id: 'c4da669d-f720-55de-82f7-59a3b83659f8',
        name: 'Chair',
        type: 'Expense',
        category: 'Health',
        description: 'Et qui consequuntur.',
        amount: 909.67,
        date: '2020-11-10T09:11:12.094Z',
        transferType: 'Cash',
        transactionMessage: 'Ea voluptatum at dolore.',
        billUrl: 'https://candido.info',
        trackAsExpense: true
    },
    {
        id: 'ae707973-3af0-5266-82d4-a94a20e14893',
        name: 'Towels',
        type: 'Income',
        category: 'Entertainment',
        description: 'Est sint aut illum neque labore.',
        amount: 386.53,
        date: '2021-06-17T01:25:16.960Z',
        transferType: 'Cash',
        transactionMessage: 'Molestiae nisi eum maiores corrupti labore sed.',
        billUrl: 'https://wilber.net',
        trackAsExpense: false
    },
    {
        id: '83548d74-05f5-56be-9795-5eea73051f2a',
        name: 'Pizza',
        type: 'Expense',
        category: 'Health',
        description: 'Facere ut esse reiciendis et maxime.',
        amount: 946.02,
        date: '2020-07-18T21:41:47.598Z',
        transferType: 'Bank',
        transactionMessage:
            'Maiores voluptatem earum animi quaerat aut sunt consequuntur.',
        billUrl: 'https://ezequiel.biz',
        trackAsExpense: false
    },
    {
        id: 'fbafe390-a814-529b-9bbe-5fa8f68b94df',
        name: 'Keyboard',
        type: 'Income',
        category: 'Food',
        description: 'Sequi quo qui neque sit minus repudiandae fuga.',
        amount: 383.96,
        date: '2021-02-22T10:33:55.625Z',
        transferType: 'Bank',
        transactionMessage: 'Ut ut recusandae.',
        billUrl: 'https://ebony.biz',
        trackAsExpense: true
    },
    {
        id: '24e4403c-55de-576d-9280-c72d317493e1',
        name: 'Cheese',
        type: 'Expense',
        category: 'Health',
        description:
            'Nemo nemo dolorem debitis nostrum excepturi ipsa aliquid.',
        amount: 781.95,
        date: '2020-08-07T17:46:32.072Z',
        transferType: 'Cash',
        transactionMessage: 'Ab sint harum sunt harum.',
        billUrl: 'https://kali.org',
        trackAsExpense: false
    }
].map(entries => new Expense(entries));
