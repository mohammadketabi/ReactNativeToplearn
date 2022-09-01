import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";
import Screen from "./../components/shared/Screen";
import Card from "./../components/shared/Card";

const CoursesScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [getCourses, setCourses] = useState([]);

    useEffect(() => {
        axios
            .get("https://rnapi.ghorbany.dev/api/courses", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(({ data }) => {
                // console.log(data);
                setCourses(data.courses);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, []);
    return (
        <Screen style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    size="large"
                    color="tomato"
                    animating={loading}
                />
            ) : null}
            <FlatList
                data={getCourses}
                keyExtractor={(course) => course._id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("CourseDetails", {
                                course: item,
                            })
                        }
                    >
                        <Card
                            title={item.title}
                            time="15:00:00"
                            price={item.price}
                            image={item.imageUrl}
                            teacher="یونس قربانی"
                            info={item.info}
                        />
                    </TouchableOpacity>
                )}
            />
        </Screen>
    );
};

export default CoursesScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    },
});
