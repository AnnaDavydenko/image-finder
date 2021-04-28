import React, {ChangeEvent, FC, useMemo} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Pagination} from "@material-ui/lab";

interface IProps {
    totalPages: number;
    ImagesPerPage: number;
    page: number;
    handleChangePage: (event: ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: FC<IProps> = (props: IProps) => {
    const {totalPages, ImagesPerPage, page, handleChangePage} = props;

    const classes = useStyles();

    const totalPagesPagination = useMemo(() => Math.ceil(totalPages / ImagesPerPage), [ImagesPerPage, totalPages]);

	return (
        <Pagination count={totalPagesPagination} page={page} onChange={handleChangePage} variant="outlined" className={classes.pagination}/>
	);
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pagination: {
            margin: theme.spacing(0, 0, 1, 0),
        }
    })
);
export default PaginationComponent;
