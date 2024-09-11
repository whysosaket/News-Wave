// import { Quotes } from "@/features/quotes/Quotes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";


const OurOfferings = () => {
  return (
    <div className="text-white w-full px-8 mb-3 md::flex">
      <div className="md:w-1/3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Real-Time News Updates</AccordionTrigger>
            <AccordionContent>
              <p>
                Stay informed with the latest and most accurate news stories as
                they happen around the world.
              </p>
              <p>
                <strong>Why it's different:</strong> Our platform uses advanced
                algorithms to ensure that only credible sources are presented to
                you in real time.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Fake News Detection</AccordionTrigger>
            <AccordionContent>
              <p>
                Use our fake news detection tool to verify the authenticity of
                news stories.
              </p>
              <p>
                <strong>Why it's different:</strong> NewsWave offers an
                AI-powered verification system that cross-checks data with
                multiple trusted sources, helping users identify misinformation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>In-Depth Analysis</AccordionTrigger>
            <AccordionContent>
              <p>
                Access comprehensive analyses of complex topics, including
                fact-checking and expert insights.
              </p>
              <p>
                <strong>Why it's different:</strong> Our team of experts
                collaborates with cutting-edge AI to provide unbiased, in-depth
                analysis on trending topics.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-2/3">
        {/* <Quotes /> */}
      </div>
    </div>
  );
};

export default OurOfferings;
