import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Card, CardMedia, CardContent, Typography, IconButton,  Stack, Paper, CardActionArea} from '@mui/material'

import { useUsersPaged } from "store/identity/user";

const SuggestionsSlider = (): JSX.Element => {
    const history = useHistory();
    const [ {data}, usersActions] = useUsersPaged();

    const [selectedSlide, setSelectedSlide] = useState<number>(0);
    const lastSlideIndex = selectedSlide + 6;

    const prev = () => setSelectedSlide((prev) => prev - 1);
    const next = () => setSelectedSlide((prev) => prev + 1);

    const handleUserChange = (user) => {
        history.push(`/user/${user.id}`)
        // There I use local storage, because api doesn't provide single element get
        localStorage.setItem('user', JSON.stringify(user))
    }

    useEffect(() => {
        usersActions.read(10)
    }, [])

    return (
            <Paper elevation={5} sx={{overflow: 'hidden'}}>
                <div>
                    <IconButton onClick={prev} disabled={selectedSlide <= 0}>
                        <NavigateBeforeIcon />
                    </IconButton>
                    <IconButton onClick={next}  disabled={lastSlideIndex >= data.length}>
                        <NavigateNextIcon />
                    </IconButton>
                </div>

                <Stack spacing={2} direction="row" m={2} height={'100%'}>
                    {data.slice(selectedSlide, lastSlideIndex).map((user) => (
                        <div key={user.id}>
                            <Card sx={{height: 400, width: 200}} onClick={() =>handleUserChange(user)}>
                                <CardActionArea>
                                    <CardMedia
                                        height="140"
                                        component="img"
                                        image={user.avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {user.first_name}{user.last_name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Gender: {user.gender}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Country: {user.address.country}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            City: {user.address.city}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Street: {user.address.street_address}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))}
                </Stack>
            </Paper>
    );
};

export default SuggestionsSlider;
