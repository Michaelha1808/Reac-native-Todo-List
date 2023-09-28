import React, { useState } from 'react'
import { Text, View, ScrollView, Alert } from 'react-native'
import Task from './components/Task'
import styles from './App.components.style'
import Form from './components/Form/index'


const App = () => {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    //* add task
    setTaskList([...taskList, task])
  }
  const handleDeleteTask = (index) => {
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa', [
      {
        text: 'OK',
        onPress: () => {
          let taskListTmp = [...taskList]
          taskListTmp.splice(index, 1),
            setTaskList(taskListTmp)
        }
      },
      { text: 'Cancel', onPress: () => { } },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task Key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />

    </View>
  )
}

export default App











// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.top}>
//         <Text style={styles.text}>Top Left</Text>
//       </View>
//       <View style={styles.bottom}>
//         <View style={styles.bottomLeft}>
//           <Text style={styles.text}>Bottom Left</Text>
//         </View>
//         <View style={styles.bottomRight}>
//           <View style={styles.bottomRightTop}>
//             <Text style={[styles.text, styles.textBottom]}>Right Top</Text>
//           </View>
//           <View style={styles.bottomRightBottom}>
//             <Text style={[styles.text, styles.textBottom]}>Right Bottom</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default App
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   top: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4fe87'
//   },
//   text: {
//     fontSize: 24,
//     color: '#21a3d0',
//     fontWeight: 'bold'
//   },
//   bottom: {
//     flex: 1,
//     flexDirection: 'row'
//   },
//   bottomLeft: {
//     flex: 1,
//     backgroundColor: '#3eee85',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   bottomRight: {
//     flex: 1,
//     backgroundColor: 'red'
//   },
//   bottomRightTop: {
//     flex: 2,
//     backgroundColor: '#ee3ee7',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   bottomRightBottom: {
//     flex: 1,
//     backgroundColor: '#379fd9',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textBottom: {
//     color: 'white'
//   }
// })

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerTop}>
//         <View style={styles.top}>
//           <Text style={styles.topText}>Top Left</Text>
//         </View>
//       </View>
//       <View style={styles.containerCenter}>
//         <View style={styles.center}>
//           <Text style={styles.centerText}>center</Text>
//         </View>
//       </View>
//       <View style={styles.containerBottom}>
//         <View style={styles.bottom}>
//           <Text style={styles.bottomText}>Bottom Right</Text>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default App
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#e3fdff',
//     flex: 1
//   },
//   containerTop: {
//     flex: 1,
//   },
//   containerCenter: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   containerBottom: {
//     flex: 1,
//   },
//   top: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: 'red',
//   },
//   topText: {
//     fontSize: 20,
//     color: '#bceaff',
//     fontWeight: 'bold'
//   },
//   bottom: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     backgroundColor: '#7ee6fd',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 18
//   },
//   bottomText: {
//     textAlign: 'right',
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   center: {
//     width: 150,
//     height: 150,
//     backgroundColor: '#2dff57',
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center'

//   },
//   centerText: {
//     fontSize: 20,
//     color: '#21a3d0',
//     fontWeight: 'bold'
//   }
// })