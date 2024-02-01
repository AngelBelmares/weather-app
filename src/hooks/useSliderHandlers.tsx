export function useSliderHandlers (): { slideLeft: () => void, slideRight: () => void } {
  const slideLeft = (): void => {
    const slider = document.getElementById('slider')
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft - 300
    }
  }

  const slideRight = (): void => {
    const slider = document.getElementById('slider')
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft + 300
    }
  }

  return { slideLeft, slideRight }
}
