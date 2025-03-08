import { render, screen } from "@testing-library/react";
import RestaurentCard, { WithPromotedLabel } from "../RestaurentCard";
import MOCK_DATA from "../mocks/resCardMocks.json";
import "@testing-library/jest-dom"


it("should render the RestaurentCard component with the props data",()=>{

    render(<RestaurentCard resData={MOCK_DATA}/>);

    const name = screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();

});
// it("should render the promoted RestaurentCard component with the props data",()=>{

//     render(<WithPromotedLabel />);

//     const name = screen.getByText("McDonald's");

//     expect(name).toBeInTheDocument();

// });

