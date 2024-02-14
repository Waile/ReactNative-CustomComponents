import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const scrollViewRef = useRef();
  const hereTextRef = useRef();

  const scrollToHere = () => {
    if (scrollViewRef.current && hereTextRef.current) {
      hereTextRef.current.measureLayout(
        scrollViewRef.current.getInnerViewNode(),
        (x, y) => {
          scrollViewRef.current.scrollTo({y, animated: true});
        },
      );
    }
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.scrollView}>
      <View>
        <Text>
          <Text ref={hereTextRef} style={{fontWeight: '900', fontSize: 30}}>
            HERE
          </Text>{' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          illo, culpa ipsa, vitae omnis unde minus quam repellendus ab, cum
          sapiente adipisci quisquam ex vero voluptatum amet et eius esse
          aliquid. Mollitia culpa, modi quo ducimus eius porro pariatur nemo
          nostrum! Ullam, assumenda. Alias eius at cumque minus. Ipsa, nihil!
          Odio eius dolorum necessitatibus porro unde, voluptates suscipit
          facilis eum enim nam. Magnam aliquid eligendi dolor quas, optio nemo
          autem maiores dolorem et facilis tenetur delectus asperiores
          necessitatibus ipsum amet ex maxime veritatis mollitia laudantium vero
          nam hic repudiandae reiciendis! Id commodi cupiditate impedit magnam
          velit modi eos, ea explicabo qui? Fuga saepe eum amet similique
          blanditiis non veritatis doloribus odit quo, cum quae magni dolor
          facere quam culpa id tempore optio asperiores ipsam. Laborum quasi,
          eveniet, dolorum ullam dolorem quod assumenda quam quae vel itaque ad
          labore facere amet, fugit harum consequuntur delectus reprehenderit.
          Quis nobis magni amet, expedita deserunt dignissimos a officia eos,
          facilis ipsum veritatis. Debitis ut unde repudiandae enim perspiciatis
          saepe autem, neque sequi sed voluptatum vel modi soluta quaerat
          placeat ipsum. Labore aliquam officia, ullam excepturi animi ad ipsa
          sed earum veniam hic nobis delectus corporis id saepe assumenda
          eligendi laudantium amet mollitia at. Eveniet cumque iure nihil optio
          ex! Maiores repudiandae voluptas provident alias rerum odio
          repellendus obcaecati deserunt dolores dolore. Consectetur
          perspiciatis sequi quis praesentium aperiam voluptatibus, accusamus
          pariatur eum qui iste cum neque labore debitis harum quasi natus
          optio! Animi placeat quibusdam iste culpa, saepe quisquam accusamus
          qui ex laborum odio asperiores? Obcaecati nemo officiis quam sunt, quo
          esse consequatur quaerat animi nostrum doloremque veritatis ipsam
          fugiat dicta illum maiores pariatur? Omnis voluptatum vero ducimus
          porro cum. Optio unde consequatur ipsam impedit consequuntur quaerat,
          similique reiciendis facere voluptatibus recusandae, doloribus sint
          dolore aspernatur veniam quas! Fugiat, consequatur a. Praesentium
          magnam similique ducimus hic placeat doloremque, rem ipsam saepe nobis
          excepturi suscipit beatae eligendi quam ad nulla, quidem maxime?
          Dolorum nostrum, velit ex exercitationem asperiores dolores molestias
          fuga, eligendi illum ab unde eaque libero facilis aspernatur suscipit.
          Et, quis dignissimos odio recusandae voluptatum sit est harum impedit
          nostrum dolore rem laudantium fugit voluptatibus, molestias maiores
          similique libero quibusdam quo quos architecto, veniam aliquid dolor
          eum voluptas. Doloremque saepe maiores, accusantium beatae tenetur
          quos eveniet quod, quas repudiandae aliquid similique mollitia impedit
          ex deleniti error perspiciatis, quibusdam quisquam? Atque non dolore
          fugiat aut eius, sint odio. Rerum, laborum. Necessitatibus laudantium
          atque saepe animi eius?
        </Text>
      </View>
      <Button onPress={scrollToHere} title="Scroll To Here" />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
