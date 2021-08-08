interface OverviewTypes {
    heading: string;
    subHeading: string;
}

type CategorySummaryTypes = OverviewTypes;

type ListTypes = OverviewTypes;

export type RootStackParamList = {
    HomeTabs: undefined;
    Overview: OverviewTypes;
    TransactionList: ListTypes;
    TransactionDetail: undefined;
    Account: undefined;
    Preference: undefined;
    BackupAndSecurity: undefined;
    Notification: undefined;
    Categories: undefined;
    CategorySummary: CategorySummaryTypes;
};
