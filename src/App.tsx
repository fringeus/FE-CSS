import "./styles.css";

/**
 * GOAL:  We don't expect perfection, just get as far as you can
 *        until we stop the exercise at a certain point. You have
 *        full creative control to implement this design.
 *
 * REQUIREMENTS:
 *  1.  Recreate the layout in the photos, modifying existing code to use
 *      semantically correct HTML where appropriate
 *  2.  The sidebar should adhere to the following rules:
 *        - Only visible on screens >= 420px
 *        - **Bonus points**: Uses some sort of transition or animation
 *
 *  Screenshot: https://asset.cloudinary.com/fringe/ce0697b57b736f0aba6e542cbb6e1d7b
 */

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p>Navbar</p>
      </div>
      <div className="sidebar">
        <p>Sidebar</p>
      </div>
      <div className="main-content">
        <h1>Main content</h1>
        <p>
          Aliqua migas sartorial fingerstache vinyl offal shabby chic.
          Single-origin coffee tattooed butcher raw denim forage pok pok, cronut
          chambray. Health goth offal lumbersexual fugiat franzen Brooklyn.
          Craft beer mustache biodiesel bushwick, proident tattooed prism
          gorpcore wayfarers consequat YOLO celiac in adipisicing cronut. Plaid
          slow-carb cred mlkshk solarpunk, cloud bread fam skateboard
          cold-pressed swag meggings knausgaard eu. Sed tilde cred adipisicing.
        </p>
        <p>
          Magna consectetur snackwave keytar tilde, humblebrag tonx echo park
          ipsum. Shoreditch forage health goth af swag, chartreuse laborum
          aesthetic meditation banjo sus in lorem listicle banh mi. Tonx tilde
          ut lorem irure, portland chia godard ethical taiyaki ex kickstarter
          wayfarers. Cupidatat marxism bitters, plaid DSA adaptogen gastropub
          est chartreuse PBR&B raclette palo santo. Vegan tumblr paleo, grailed
          hexagon solarpunk hella tilde prism shaman activated charcoal
          semiotics umami occaecat.
        </p>
        <p>
          Cornhole echo park roof party aute, dolore shoreditch chartreuse lorem
          ullamco labore intelligentsia gatekeep mukbang cupidatat. Pour-over
          veniam flannel chambray. Proident truffaut poke sartorial bicycle
          rights shoreditch. Dolore copper mug ut JOMO pour-over consequat
          kitsch pariatur.
        </p>
        <p>
          Roof party sed beard iPhone raw denim fashion axe. Enim adaptogen
          bitters DIY, ethical eiusmod chicharrones tote bag forage kogi
          letterpress disrupt next level selfies. Flexitarian tacos try-hard
          unicorn pickled cold-pressed tumblr subway tile commodo. Fit four loko
          ut kogi. Post-ironic anim vegan distillery literally vexillologist +1
          fanny pack venmo tattooed offal dreamcatcher fashion axe. Officia
          marfa deep v mixtape post-ironic, butcher tacos master cleanse
          locavore selfies before they sold out. Chia you probably haven't heard
          of them woke, ethical church-key officia retro consectetur.
        </p>
      </div>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
}
