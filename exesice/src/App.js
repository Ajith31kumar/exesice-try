import logo from "./logo.svg";
import "./App.css";
import PriceCard from './PriceCard';

function App() {
  return (
    <div className="App">
      
      <div className="price-cards-container">
        <PriceCard
          name="FREE"
          price="$0/month"
          features={[
            'Single User',
            '50GB Storage',
            'Unlimited Public Projects',
            'Community Access',
          ]}
          button="BUTTON"
        />
        <PriceCard
          name="PLUS"
          price="$9/month"
          features={[
            'Users',
            '50GB Storage',
            'Unlimited Public Projects',
            'Community Acc',
            'Unlimited Private Projects',
            'Dedicated Phone Support',
            'Free Subdomain',
            'Monthly Status Reports',
          ]}
          button="BUTTON"
        />
        <PriceCard
          name="PRO"
          price="$49/month"
          features={[
            'Unlimited Users',
            '50GB Storage',
            'Unlimited Public Projects',
            'Community Access',
            'Unlimited Private Projects',
            'Dedicated Phone Support',
            'Free Subdomain',
            'Monthly Status Reports',
          ]}
          button="BUTTON"
        />
      </div>
    </div>
  );
}

export default App;