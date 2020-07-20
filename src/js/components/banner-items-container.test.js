import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { listingCategories, categoryTitles } from '../constants/all-constants';
import { GridList, GridListTile, GridListTileBar, Link, Typography, IconButton, Tooltip } from '@material-ui/core';
import { AddBox, CheckBox } from '@material-ui/icons';

import BannerItemsContainer from './banner-items-container';

function setupWithNoMovies() {
    const props = {
        title: categoryTitles[listingCategories.topRated],
        movies: [],
        moviesInCart: [],
        category: listingCategories.topRated,
        width: 'lg',
        onAddToList: () => { },
    };
    const wrapper = shallow(<BannerItemsContainer {...props} />);
    return { wrapper, props };
}

describe('BannerItemsContainer Test Suite with no movies', () => {
    const { wrapper } = setupWithNoMovies();
    it('Should not have movies', () => {
        expect(wrapper.dive().find(GridListTile).length).toBe(0);
    });
    it('Should not have movies', () => {
        expect(wrapper.dive().find(GridListTile).length).toBe(0);
    });
});



function setupWithSixMovies() {
    const props = {
        title: categoryTitles[listingCategories.topRated],
        movies: [
            {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            }, {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            },
            {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            },
            {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            }, {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            }, {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            }, {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            }, {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            }, {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            },
            {
                popularity: 93.841,
                vote_count: 166,
                video: false,
                poster_path: '/hPkqY2EMqWUnFEoedukilIUieVG.jpg',
                id: 531876,
                adult: false,
                backdrop_path: '/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',
                original_language: 'en',
                original_title: 'The Outpost',
                genre_ids: [
                    28,
                    18,
                    36,
                    10752
                ],
                title: 'The Outpost',
                vote_average: 7,
                overview: 'A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.',
                release_date: '2020-06-24',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//hPkqY2EMqWUnFEoedukilIUieVG.jpg'
            },
            {
                popularity: 64.659,
                vote_count: 56,
                video: false,
                poster_path: '/3wZ0gxLqsPleneFSTZILmM3BE8Q.jpg',
                id: 539181,
                adult: false,
                backdrop_path: '/vpUUznNzW85xo02H16RaSxRNS1.jpg',
                original_language: 'en',
                original_title: 'Relic',
                genre_ids: [
                    18,
                    27
                ],
                title: 'Relic',
                vote_average: 6.2,
                overview: 'When Edna, the elderly and widowed matriarch of the family, goes missing, her daughter Kay and granddaughter Sam travel to their remote family home to find her. Soon after her return, they start to discover a sinister presence haunting the house and taking control of Edna.',
                release_date: '2020-07-03',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//3wZ0gxLqsPleneFSTZILmM3BE8Q.jpg'
            },
            {
                popularity: 75.527,
                vote_count: 1276,
                video: false,
                poster_path: '/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg',
                id: 385103,
                adult: false,
                backdrop_path: '/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg',
                original_language: 'en',
                original_title: 'Scoob!',
                genre_ids: [
                    12,
                    16,
                    35,
                    9648,
                    10751
                ],
                title: 'Scoob!',
                vote_average: 8,
                overview: 'In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.',
                release_date: '2020-05-15',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg'
            },
            {
                popularity: 67.007,
                vote_count: 4,
                video: false,
                poster_path: '/27eA9xGba61LtKr7gJRnhtDDgEP.jpg',
                id: 651586,
                adult: false,
                backdrop_path: null,
                original_language: 'es',
                original_title: 'Superagente Makey',
                genre_ids: [
                    28,
                    35
                ],
                title: 'Superagente Makey',
                vote_average: 5,
                overview: 'Makey is a humble police officer that, unexpectedly, gets caught in the middle of a dangerous international drug operation in the Costa del Sol, Spain.',
                release_date: '2020-07-17',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//27eA9xGba61LtKr7gJRnhtDDgEP.jpg'
            },
            {
                popularity: 64.157,
                vote_count: 2595,
                video: false,
                poster_path: '/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
                id: 50843901,
                adult: false,
                backdrop_path: '/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg',
                original_language: 'en',
                original_title: 'Onward',
                genre_ids: [
                    12,
                    16,
                    35,
                    14,
                    10751
                ],
                title: 'Onward',
                vote_average: 7.9,
                overview: 'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.',
                release_date: '2020-02-29',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg'
            },
            {
                popularity: 71.584,
                vote_count: 656,
                video: false,
                poster_path: '/tI8ocADh22GtQFV28vGHaBZVb0U.jpg',
                id: 475430001,
                adult: false,
                backdrop_path: '/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg',
                original_language: 'en',
                original_title: 'Artemis Fowl',
                genre_ids: [
                    12,
                    14,
                    878,
                    10751
                ],
                title: 'Artemis Fowl',
                vote_average: 5.9,
                overview: 'Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father\'s disappearance.',
                release_date: '2020-06-12',
                poster_full_path: 'http://image.tmdb.org/t/p/w185//tI8ocADh22GtQFV28vGHaBZVb0U.jpg'
            }
        ],
        moviesInCart: [{
            popularity: 64.157,
            vote_count: 2595,
            video: false,
            poster_path: '/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
            id: 50843901,
            adult: false,
            backdrop_path: '/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg',
            original_language: 'en',
            original_title: 'Onward',
            genre_ids: [
                12,
                16,
                35,
                14,
                10751
            ],
            title: 'Onward',
            vote_average: 7.9,
            overview: 'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.',
            release_date: '2020-02-29',
            poster_full_path: 'http://image.tmdb.org/t/p/w185//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg'
        }],
        category: listingCategories.topRated,
        onAddToList: () => { },
    };
    const wrapperExtraLarge = shallow((<BannerItemsContainer {...props} width="xl" />));
    const wrapperLarge = shallow((<BannerItemsContainer {...props} width="lg" />));
    const wrapperMedium = shallow((<BannerItemsContainer {...props} width="md" />));
    const wrapperSmall = shallow((<BannerItemsContainer {...props} width="sm" />));
    return { wrapperExtraLarge, wrapperLarge, wrapperMedium, wrapperSmall, props };
}


describe('BannerItemsContainer Test Suite with movies on different screen sizes', () => {
    const { wrapperExtraLarge, wrapperLarge, wrapperMedium, wrapperSmall, } = setupWithSixMovies();
    it('Extra Large Should have 14 movies', () => {
        expect(wrapperExtraLarge.dive().find(GridListTile)).toHaveLength(14);
    });
    it('Large Should have 12 movies', () => {
        expect(wrapperLarge.dive().find(GridListTile)).toHaveLength(12);
    });

    it('Medium Should have 8 movies', () => {
        expect(wrapperMedium.dive().find(GridListTile)).toHaveLength(8);
    });

    it('Small Should have 6 movies', () => {
        expect(wrapperSmall.dive().find(GridListTile)).toHaveLength(6);
    });

    it('One Movie should be shown as added to cart', () => {
        expect(
            wrapperExtraLarge.dive()
                .find(GridListTileBar)
                .findWhere(gridListTileBar => shallow(gridListTileBar.prop('actionIcon')).find(CheckBox).length > 0)
        ).toHaveLength(1);
    })
    it('13 Movie should be shown as out of cart', () => {
        expect(
            wrapperExtraLarge.dive()
                .find(GridListTileBar)
                .findWhere(gridListTileBar => shallow(gridListTileBar.prop('actionIcon')).find(AddBox).length > 0)
        ).toHaveLength(13);
    })
});
