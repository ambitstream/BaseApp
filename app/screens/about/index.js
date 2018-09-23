import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

//Styles
import { AppStyles } from '../../theme';

class ScreenComponent extends Component {
	render() {
		return (
			<View style={AppStyles.markup.container}>
				<ScrollView style={AppStyles.markup.commonPadding}>
					<Text>
						Проект “Карта репетиционных баз” был создан музыкантами для музыкантов. Когда в Киеве количество репетиционных баз, как и начинающих групп, резко стало увеличиваться - искать и сравнивать их по форумам становилось все сложнее, а найти базу в месте, куда было бы удобно добираться всем участникам группы - только усложняло эту задачу. Поэтому было принято решение собрать всю информацию о репетиционных базах на одном сайте.
					</Text>
					<Text style={{marginTop: 10}}>
						Так сайт увидел свет в 2009 году, куда были добавлены первые 20 баз. Позже, в 2018 году, было создано приложение для iOS.
						Сейчас на сайте насчитывается более 100 баз с регулярными обновлениями и отзывами музыкантов.
					</Text>
				</ScrollView>
			</View>
		);
	}
}

export default connect(
	(store) => ({
		state: store
	}),
)(ScreenComponent);
