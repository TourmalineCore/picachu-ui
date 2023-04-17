import CircleProgressBar from "./CircleProgressBar";

describe(`CircleProgressBar`, () => {
  it(`component SHOULD show percentage IF prop is true`, () => {
    mountComponent({
      isPercentageShown: true,
      radius: 32,
      strokeWidth: 7,
      circleWidth: 72,
      percentage: 100,
    });
    cy.getByData(`circle-percentage-text`).should(`be.exist`);
  });
  it(`component SHOULD not show percentage IF prop is false`, () => {
    mountComponent({
      isPercentageShown: false,
      radius: 32,
      strokeWidth: 7,
      circleWidth: 72,
      percentage: 100,
    });
    cy.getByData(`circle-percentage-text`).should(`not.exist`);
  });
});

function mountComponent(
  {
    percentage,
    radius,
    strokeWidth,
    circleWidth,
    isPercentageShown,
  }: {
    percentage: number;
    radius: number;
    strokeWidth: number;
    circleWidth: number;
    isPercentageShown: boolean;
  },
) {
  cy.mount(<CircleProgressBar
    percentage={percentage}
    radius={radius}
    isPercentageShown={isPercentageShown}
    strokeWidth={strokeWidth}
    circleWidth={circleWidth}
  />);
}
