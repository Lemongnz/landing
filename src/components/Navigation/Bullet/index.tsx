interface BulletInterface {
  name: string;
  ordinal: string;
}

const Bullet = ({ name, ordinal }: BulletInterface) => {
  // computed: mapState([CURRENT_SECTION]),

  const handleClick = () => {
    const sectionSelector = `[data-section='${name}']`;

    // goToSection(this.$store, {
    //   node: this.$root.$el.querySelector(sectionSelector),
    // });
  };

  console.log(ordinal, name);
  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        // class={
        //   NAVIGATION_BULLET +
        //   (currentSection == name ? " current" : "")
        // }
        // aria-label={`Go to ${ordinal} section. ${SECTION_MAP[name]}.`}
      />
    </li>
  );
};

export default Bullet;
