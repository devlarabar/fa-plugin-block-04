/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const {
        attributes: {
            header,
            buttonText,
            buttonURL,
            content,
            isInternalLink,
            hasButton
        },
    } = props;

    const blockProps = useBlockProps.save({
        className: "fa-04-block-container"
    });

    return (
        <div {...blockProps}>
            <div class="fa-04-block">
                <RichText.Content
                    tagName="h2"
                    value={header}
                />
                <div class="fa-04-content">
                    <RichText.Content
                        tagName="div"
                        value={content}
                    />
                </div>
                {hasButton &&
                    <div className="fa-04-block-button-container">
                        <a href={isInternalLink ? `/${buttonURL}` : buttonURL} target={isInternalLink ? "_self" : "_blank"} rel="noopener">
                            <button className="fa-media-emphasis-block-btn wp-block-button__link wp-element-button">
                                {buttonText ? buttonText + " →" : "Read More →"}
                            </button>
                        </a>
                    </div>
                }
            </div>
        </div>
    );
};

export default Save;
