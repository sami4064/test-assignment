import { isWidthUp } from '@material-ui/core/withWidth';

export const calculateColumns = width => {
    return isWidthUp('xl', width) ? 7
        : isWidthUp('lg', width) ? 6
            : isWidthUp('md', width) ? 4
                : isWidthUp('sm', width) ? 3
                    : 2;
}

export const calculateDetailItemColumns = width => {
    return isWidthUp('xl', width) ? 5
        : isWidthUp('lg', width) ? 4
            : isWidthUp('md', width) ? 3
                : isWidthUp('sm', width) ? 2
                    : 1;
}

export const calculateCartItemColumns = width => {
    return isWidthUp('xl', width) ? 3
        : isWidthUp('lg', width) ? 2
            : isWidthUp('md', width) ? 1
                : isWidthUp('sm', width) ? 1
                    : 1;
}